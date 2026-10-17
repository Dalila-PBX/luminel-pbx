<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido. Solo se aceptan peticiones POST.'
    ]);
    exit;
}

// 1. RECOLECCIÓN Y SANITIZACIÓN DE DATOS
$nombre_negocio = htmlspecialchars(trim($_POST['nombre_negocio'] ?? ''), ENT_QUOTES, 'UTF-8');
$giro           = htmlspecialchars(trim($_POST['giro'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');
$ubicacion      = htmlspecialchars(trim($_POST['ubicacion'] ?? 'No especificada'), ENT_QUOTES, 'UTF-8');
$whatsapp       = htmlspecialchars(trim($_POST['whatsapp'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');
$correo_cliente = htmlspecialchars(trim($_POST['correo'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');

// Verificación opcional de Google reCAPTCHA v3
// Cuando tengas tus credenciales de Google reCAPTCHA, pega tu Secret Key aquí:
$recaptcha_secret = ''; 
$recaptcha_response = $_POST['g-recaptcha-response'] ?? '';

if (!empty($recaptcha_secret)) {
    if (empty($recaptcha_response)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Validación de seguridad fallida. Por favor recarga e intenta de nuevo.'
        ]);
        exit;
    }

    $verify_url = "https://www.google.com/recaptcha/api/siteverify";
    $verify_data = http_build_query([
        'secret'   => $recaptcha_secret,
        'response' => $recaptcha_response,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
    ]);

    $opts = [
        'http' => [
            'method'  => 'POST',
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'content' => $verify_data
        ]
    ];
    $context = stream_context_create($opts);
    $verify_result = @file_get_contents($verify_url, false, $context);
    $captcha_json = json_decode($verify_result, true);

    if (!$captcha_json || empty($captcha_json['success']) || ($captcha_json['score'] ?? 0) < 0.5) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'No se superó la prueba de seguridad reCAPTCHA. Intenta nuevamente.'
        ]);
        exit;
    }
}

// Respuestas de Evaluación
$identidad_definida   = htmlspecialchars(trim($_POST['identidad_definida'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$redes_consistentes   = htmlspecialchars(trim($_POST['redes_consistentes'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$info_completa        = htmlspecialchars(trim($_POST['info_completa'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$comunica_claramente  = htmlspecialchars(trim($_POST['comunica_claramente'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

$cuenta_con_web       = htmlspecialchars(trim($_POST['cuenta_con_web'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$web_moviles          = htmlspecialchars(trim($_POST['web_moviles'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$web_actualizada      = htmlspecialchars(trim($_POST['web_actualizada'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$web_contacto         = htmlspecialchars(trim($_POST['web_contacto'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

$hace_publicidad      = htmlspecialchars(trim($_POST['hace_publicidad'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$publicidad_efectiva  = htmlspecialchars(trim($_POST['publicidad_efectiva'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

// Métricas de Diagnóstico
$indice_digital       = htmlspecialchars(trim($_POST['indice_digital'] ?? '0'), ENT_QUOTES, 'UTF-8');
$nivel_madurez        = htmlspecialchars(trim($_POST['nivel_madurez'] ?? 'En Evaluación'), ENT_QUOTES, 'UTF-8');
$recomendacion        = htmlspecialchars(trim($_POST['recomendacion'] ?? ''), ENT_QUOTES, 'UTF-8');

// 2. VALIDACIÓN BÁSICA OBLIGATORIA
if (empty($nombre_negocio)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'El nombre del negocio es obligatorio.'
    ]);
    exit;
}

if ($whatsapp === 'No especificado' && $correo_cliente === 'No especificado') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Debes proporcionar al menos un medio de contacto (WhatsApp o Correo).'
    ]);
    exit;
}

// 3. CONFIGURACIÓN DEL CORREO
$destinatario = 'dalila191997@gmail.com';
$asunto = '=?UTF-8?B?' . base64_encode("Nuevo Diagnóstico Digital: {$nombre_negocio}") . '?=';

// Construcción del correo en formato HTML elegante
$mensaje_html = "
<!DOCTYPE html>
<html lang='es'>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #040d0e; color: #ffffff; margin: 0; padding: 20px; }
    .container { max-width: 650px; margin: 0 auto; background: #092327; border: 1px solid rgba(168,199,56,0.3); border-radius: 16px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .header { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 25px; }
    .header h1 { color: #a8c738; margin: 0 0 8px 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; }
    .header p { color: #88a0a3; margin: 0; font-size: 14px; }
    .section-title { color: #00b1bc; font-size: 16px; font-weight: bold; margin: 20px 0 10px 0; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 5px; text-transform: uppercase; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
    td { padding: 8px 6px; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.05); }
    td.label { color: #88a0a3; width: 45%; }
    td.value { color: #ffffff; font-weight: 600; }
    .score-box { background: rgba(0,0,0,0.3); border: 1px solid #a8c738; border-radius: 12px; padding: 15px; text-align: center; margin: 20px 0; }
    .score-num { font-size: 38px; font-weight: bold; color: #a8c738; }
    .score-level { color: #ffffff; font-size: 15px; font-weight: bold; text-transform: uppercase; }
    .advice { color: #c4d9db; font-size: 13px; margin-top: 8px; line-height: 1.4; }
    .footer { text-align: center; font-size: 12px; color: #587073; margin-top: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h1>Luminel Agencia Creativa</h1>
      <p>Nuevo Diagnóstico Digital Recibido desde el Sitio Web</p>
    </div>

    <div class='score-box'>
      <div class='score-num'>{$indice_digital}/100</div>
      <div class='score-level'>Nivel: {$nivel_madurez}</div>
      <div class='advice'>{$recomendacion}</div>
    </div>

    <div class='section-title'>1. Datos Generales del Negocio</div>
    <table>
      <tr><td class='label'>Nombre del negocio:</td><td class='value'>{$nombre_negocio}</td></tr>
      <tr><td class='label'>Giro comercial:</td><td class='value'>{$giro}</td></tr>
      <tr><td class='label'>Ubicación:</td><td class='value'>{$ubicacion}</td></tr>
      <tr><td class='label'>WhatsApp:</td><td class='value'>{$whatsapp}</td></tr>
      <tr><td class='label'>Correo Electrónico:</td><td class='value'>{$correo_cliente}</td></tr>
    </table>

    <div class='section-title'>2. Identidad Visual</div>
    <table>
      <tr><td class='label'>¿Cuenta con identidad definida?</td><td class='value'>{$identidad_definida}</td></tr>
      <tr><td class='label'>¿Línea gráfica consistente en redes?</td><td class='value'>{$redes_consistentes}</td></tr>
      <tr><td class='label'>¿Información completa y al día?</td><td class='value'>{$info_completa}</td></tr>
      <tr><td class='label'>¿Contenido comunica claramente?</td><td class='value'>{$comunica_claramente}</td></tr>
    </table>

    <div class='section-title'>3. Sitio Web</div>
    <table>
      <tr><td class='label'>¿Cuenta con página web?</td><td class='value'>{$cuenta_con_web}</td></tr>";

if ($cuenta_con_web === 'si') {
    $mensaje_html .= "
      <tr><td class='label'>• Funciona en móviles:</td><td class='value'>{$web_moviles}</td></tr>
      <tr><td class='label'>• Información actualizada:</td><td class='value'>{$web_actualizada}</td></tr>
      <tr><td class='label'>• Facilita el contacto directo:</td><td class='value'>{$web_contacto}</td></tr>";
}

$mensaje_html .= "
    </table>

    <div class='section-title'>4. Publicidad Digital</div>
    <table>
      <tr><td class='label'>¿Realiza publicidad en línea?</td><td class='value'>{$hace_publicidad}</td></tr>";

if ($hace_publicidad === 'si') {
    $mensaje_html .= "
      <tr><td class='label'>• ¿Le resulta efectiva?</td><td class='value'>{$publicidad_efectiva}</td></tr>";
}

$mensaje_html .= "
    </table>

    <div class='footer'>
      Este correo fue generado automáticamente desde el formulario de Diagnóstico Digital de Luminel.<br>
      Para contactar al cliente, responde directamente a este correo o vía WhatsApp a: {$whatsapp}.
    </div>
  </div>
</body>
</html>
";

// 4. CABECERAS PARA CORREO HTML
$reply_to = filter_var($correo_cliente, FILTER_VALIDATE_EMAIL) ? $correo_cliente : 'no-reply@luminel.mx';

$cabeceras = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Luminel Diagnóstico <no-reply@luminel.mx>',
    'Reply-To: ' . $reply_to,
    'X-Mailer: PHP/' . phpversion()
];

// 5. ENVÍO DEL CORREO
$enviado = @mail($destinatario, $asunto, $mensaje_html, implode("\r\n", $cabeceras));

if ($enviado) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => '¡Diagnóstico enviado con éxito! Nuestro equipo comercial se pondrá en contacto contigo a la brevedad.'
    ]);
} else {
    // Si la función mail() del servidor falla
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Hubo un inconveniente al enviar el correo desde el servidor. Por favor intenta de nuevo o comunícate vía WhatsApp.'
    ]);
}
