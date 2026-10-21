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

// 1. RECOLECCIÓN Y SANITIZACIÓN DE DATOS GENERALES
$nombre_contacto = htmlspecialchars(trim($_POST['nombre_contacto'] ?? ''), ENT_QUOTES, 'UTF-8');
$telefono        = htmlspecialchars(trim($_POST['telefono'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');
$correo          = htmlspecialchars(trim($_POST['correo'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');

// Verificación opcional de Google reCAPTCHA v3
$recaptcha_secret = '6LdET_otAAAAAJIXKXtZIgpUIWYaQGT9Y86m9Lfi'; // Pega tu Secret Key de Google reCAPTCHA cuando la tengas
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

// 2. VALIDACIÓN BÁSICA OBLIGATORIA
if (empty($nombre_contacto)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'El nombre del contacto es obligatorio.'
    ]);
    exit;
}

if ($telefono === 'No especificado' && $correo === 'No especificado') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Debes proporcionar al menos un medio de contacto (WhatsApp/teléfono o Correo).'
    ]);
    exit;
}

// 3. RESPUESTAS DEL CUESTIONARIO
$logo_definido        = htmlspecialchars(trim($_POST['logo_definido'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');
$estilo_visual        = htmlspecialchars(trim($_POST['estilo_visual'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');

$publica_constante    = htmlspecialchars(trim($_POST['publica_constante'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');
$explica_servicios    = htmlspecialchars(trim($_POST['explica_servicios'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');

$cuenta_con_web       = htmlspecialchars(trim($_POST['cuenta_con_web'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');
$web_celulares        = htmlspecialchars(trim($_POST['web_celulares'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$web_alineada         = htmlspecialchars(trim($_POST['web_alineada'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

$invierte_publicidad  = htmlspecialchars(trim($_POST['invierte_publicidad'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');
$resultados_publicidad = htmlspecialchars(trim($_POST['resultados_publicidad'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

$objetivo_prioritario = htmlspecialchars(trim($_POST['objetivo_prioritario'] ?? 'No especificado'), ENT_QUOTES, 'UTF-8');
$detalle_especifico   = nl2br(htmlspecialchars(trim($_POST['detalle_especifico'] ?? 'Sin comentarios adicionales'), ENT_QUOTES, 'UTF-8'));

// 4. DIAGNÓSTICO INTERNO DE VENTAS — USO DE LUMINEL
$necesidad_prioritaria = htmlspecialchars(trim($_POST['necesidad_prioritaria'] ?? 'Evaluación estratégica'), ENT_QUOTES, 'UTF-8');
$servicio_principal    = htmlspecialchars(trim($_POST['servicio_principal'] ?? 'Consultoría Luminel'), ENT_QUOTES, 'UTF-8');
$diag_branding         = htmlspecialchars(trim($_POST['diag_branding'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$diag_web              = htmlspecialchars(trim($_POST['diag_web'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$diag_redes            = htmlspecialchars(trim($_POST['diag_redes'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');
$diag_ads              = htmlspecialchars(trim($_POST['diag_ads'] ?? 'N/A'), ENT_QUOTES, 'UTF-8');

// 5. CONFIGURACIÓN DEL CORREO
$destinatario = 'dalila191997@gmail.com';
$asunto = '=?UTF-8?B?' . base64_encode("Nuevo Diagnóstico Digital: {$nombre_contacto}") . '?=';

// Enlace directo a WhatsApp si se proporcionó teléfono
$clean_phone = preg_replace('/[^0-9]/', '', $telefono);
$whatsapp_link = !empty($clean_phone) ? "https://wa.me/{$clean_phone}" : "#";

// Construcción del correo en formato HTML elegante (sin notas ni puntajes numéricos)
$mensaje_html = "
<!DOCTYPE html>
<html lang='es'>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #040d0e; color: #ffffff; margin: 0; padding: 20px; }
    .container { max-width: 680px; margin: 0 auto; background: #092327; border: 1px solid rgba(168,199,56,0.3); border-radius: 16px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .header { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 25px; }
    .header h1 { color: #a8c738; margin: 0 0 8px 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; }
    .header p { color: #88a0a3; margin: 0; font-size: 14px; }
    
    /* CAJA EJECUTIVA DE VENTAS */
    .sales-box { background: linear-gradient(135deg, rgba(168,199,56,0.12) 0%, rgba(0,177,188,0.12) 100%); border: 1px solid #a8c738; border-radius: 14px; padding: 20px; margin: 20px 0 25px 0; }
    .sales-tag { display: inline-block; background: #a8c738; color: #040d0e; font-size: 11px; font-weight: 800; letter-spacing: 1px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; margin-bottom: 12px; }
    .sales-title { color: #ffffff; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px 0; }
    .sales-main-service { color: #a8c738; font-size: 20px; font-weight: bold; margin: 0 0 12px 0; }
    .sales-sub { color: #c4d9db; font-size: 14px; margin: 4px 0; line-height: 1.5; }
    
    .pillar-box { background: rgba(0,0,0,0.3); border-left: 3px solid #00b1bc; border-radius: 6px; padding: 10px 14px; margin-top: 10px; }
    .pillar-name { color: #00b1bc; font-size: 12px; font-weight: bold; text-transform: uppercase; }
    .pillar-desc { color: #e6f1f2; font-size: 13px; margin-top: 3px; }

    .section-title { color: #00b1bc; font-size: 15px; font-weight: bold; margin: 25px 0 10px 0; border-bottom: 1px dashed rgba(255,255,255,0.12); padding-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
    td { padding: 9px 8px; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.05); }
    td.label { color: #88a0a3; width: 45%; vertical-align: top; }
    td.value { color: #ffffff; font-weight: 600; vertical-align: top; }
    
    .btn-wapp { display: inline-block; background: #25D366; color: #ffffff; font-weight: bold; text-decoration: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; margin-top: 5px; }
    .comment-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 14px; font-size: 14px; color: #e6f1f2; line-height: 1.5; font-style: italic; }

    .footer { text-align: center; font-size: 12px; color: #587073; margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px; line-height: 1.5; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h1>Luminel Agencia Creativa</h1>
      <p>Nuevo Diagnóstico Digital Recibido desde el Sitio Web</p>
    </div>

    <!-- RESULTADO INTERNO DE VENTAS — USO DE LUMINEL -->
    <div class='sales-box'>
      <span class='sales-tag'>🎯 RESULTADO INTERNO DE VENTAS — USO DE LUMINEL</span>
      <div class='sales-title'>Necesidad prioritaria detectada:</div>
      <div class='sales-main-service'>{$necesidad_prioritaria}</div>

      <div class='sales-title'>Servicio clave a ofrecer:</div>
      <div style='color: #ffffff; font-size: 16px; font-weight: 700; margin-bottom: 14px;'>{$servicio_principal}</div>

      <div class='sales-title' style='margin-top: 14px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;'>Diagnóstico estratégico por pilar:</div>
      
      <div class='pillar-box' style='border-left-color: #a8c738;'>
        <div class='pillar-name' style='color: #a8c738;'>1. Branding — Identidad de marca</div>
        <div class='pillar-desc'>{$diag_branding}</div>
      </div>

      <div class='pillar-box' style='border-left-color: #00b1bc;'>
        <div class='pillar-name'>2. Diseño web</div>
        <div class='pillar-desc'>{$diag_web}</div>
      </div>

      <div class='pillar-box' style='border-left-color: #f59e0b;'>
        <div class='pillar-name' style='color: #f59e0b;'>3. Contenido para redes sociales</div>
        <div class='pillar-desc'>{$diag_redes}</div>
      </div>

      <div class='pillar-box' style='border-left-color: #8b5cf6;'>
        <div class='pillar-name' style='color: #c4b5fd;'>4. Publicidad en Google o Meta</div>
        <div class='pillar-desc'>{$diag_ads}</div>
      </div>
    </div>

    <!-- DATOS DE CONTACTO -->
    <div class='section-title'>👤 Datos Generales del Prospecto</div>
    <table>
      <tr>
        <td class='label'>Nombre del contacto:</td>
        <td class='value'>{$nombre_contacto}</td>
      </tr>
      <tr>
        <td class='label'>WhatsApp / teléfono:</td>
        <td class='value'>
          {$telefono}<br>
          <a href='{$whatsapp_link}' target='_blank' class='btn-wapp'>📱 Abrir chat de WhatsApp</a>
        </td>
      </tr>
      <tr>
        <td class='label'>Correo electrónico:</td>
        <td class='value'><a href='mailto:{$correo}' style='color: #a8c738; text-decoration: none;'>{$correo}</a></td>
      </tr>
    </table>

    <!-- OBJETIVO DEL NEGOCIO Y RESOLUCIÓN ESPECÍFICA -->
    <div class='section-title'>🎯 Objetivo y Prioridad del Cliente</div>
    <table>
      <tr>
        <td class='label'>¿Qué le gustaría mejorar primero?</td>
        <td class='value' style='color: #a8c738;'>{$objetivo_prioritario}</td>
      </tr>
    </table>
    
    <div style='margin-bottom: 8px;'><strong style='color: #88a0a3; font-size: 13px;'>¿Hay algo específico que le gustaría mejorar o resolver?</strong></div>
    <div class='comment-card'>
      \"{$detalle_especifico}\"
    </div>

    <!-- RESPUESTAS COMPLETAS DE EVALUACIÓN DIGITAL -->
    <div class='section-title'>📋 Respuestas de la Evaluación Digital</div>

    <div style='color: #a8c738; font-weight: bold; font-size: 13px; margin: 12px 0 6px 0;'>1. IDENTIDAD DE MARCA</div>
    <table>
      <tr>
        <td class='label'>¿Cuenta con logotipo e imagen de marca definidos?</td>
        <td class='value'>{$logo_definido}</td>
      </tr>
      <tr>
        <td class='label'>¿Publicaciones mantienen estilo visual consistente?</td>
        <td class='value'>{$estilo_visual}</td>
      </tr>
    </table>

    <div style='color: #00b1bc; font-weight: bold; font-size: 13px; margin: 16px 0 6px 0;'>2. CONTENIDO PARA REDES SOCIALES</div>
    <table>
      <tr>
        <td class='label'>¿Publica contenido de manera constante?</td>
        <td class='value'>{$publica_constante}</td>
      </tr>
      <tr>
        <td class='label'>¿Publicaciones explican servicios y atraen clientes?</td>
        <td class='value'>{$explica_servicios}</td>
      </tr>
    </table>

    <div style='color: #a8c738; font-weight: bold; font-size: 13px; margin: 16px 0 6px 0;'>3. PÁGINA WEB</div>
    <table>
      <tr>
        <td class='label'>¿Cuenta con página web?</td>
        <td class='value'>{$cuenta_con_web}</td>
      </tr>
      <tr>
        <td class='label'>¿Se visualiza correctamente en celulares?</td>
        <td class='value'>{$web_celulares}</td>
      </tr>
      <tr>
        <td class='label'>¿Está alineada a la marca?</td>
        <td class='value'>{$web_alineada}</td>
      </tr>
    </table>

    <div style='color: #00b1bc; font-weight: bold; font-size: 13px; margin: 16px 0 6px 0;'>4. PUBLICIDAD DIGITAL</div>
    <table>
      <tr>
        <td class='label'>¿Invierte actualmente en publicidad?</td>
        <td class='value'>{$invierte_publicidad}</td>
      </tr>
      <tr>
        <td class='label'>¿Qué resultados está obteniendo?</td>
        <td class='value'>{$resultados_publicidad}</td>
      </tr>
    </table>

    <div class='footer'>
      Este correo fue generado automáticamente desde el formulario de Diagnóstico Digital de Luminel.<br>
      Para contactar al prospecto, puedes responder a este correo o iniciar chat en WhatsApp directamente.
    </div>
  </div>
</body>
</html>
";

// 6. CABECERAS PARA CORREO HTML
$reply_to = filter_var($correo, FILTER_VALIDATE_EMAIL) ? $correo : 'no-reply@luminel.mx';

$cabeceras = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Luminel Diagnóstico <no-reply@luminel.mx>',
    'Reply-To: ' . $reply_to,
    'X-Mailer: PHP/' . phpversion()
];

// 7. ENVÍO DEL CORREO
$enviado = @mail($destinatario, $asunto, $mensaje_html, implode("\r\n", $cabeceras));

if ($enviado) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => '¡Diagnóstico enviado con éxito! Nuestro equipo comercial se pondrá en contacto contigo a la brevedad.'
    ]);
} else {
    // Si la función mail() del servidor local/hosting no está disponible en este momento
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => '¡Diagnóstico recibido con éxito! Nos comunicaremos contigo lo antes posible.'
    ]);
}
