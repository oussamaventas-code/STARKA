import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de Starka Motor. Información sobre el uso de cookies en nuestro sitio web.',
};

export default function PoliticaCookies() {
  return (
    <>
      <h1>Política de Cookies</h1>

      <p>
        En cumplimiento de la Ley 34/2002 (LSSI-CE) y del Reglamento (UE) 2016/679 (RGPD),
        te informamos sobre el uso de cookies en el sitio web starkamotor.es.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
        visitas un sitio web. Permiten que el sitio recuerde tus acciones y preferencias
        (idioma, tamaño de fuente y otras preferencias de visualización) durante un periodo
        de tiempo, para que no tengas que volver a configurarlas cada vez que regreses.
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>

      <h3>Cookies técnicas (necesarias)</h3>
      <p>
        Son imprescindibles para el correcto funcionamiento del sitio web. No requieren
        consentimiento.
      </p>
      <ul>
        <li><strong>sm-cookies-accepted:</strong> Almacena tu preferencia sobre el aviso de cookies. Duración: 1 año.</li>
      </ul>

      <h3>Cookies analíticas</h3>
      <p>
        Nos permiten analizar el comportamiento de los usuarios para mejorar la experiencia
        de navegación. Sólo se activan con tu consentimiento.
      </p>
      <ul>
        <li><strong>Google Analytics (_ga, _gid):</strong> Recopilan información anónima sobre cómo los visitantes usan el sitio web. Proveedor: Google LLC. Duración: hasta 2 años.</li>
      </ul>

      <h2>3. ¿Cómo gestionar las cookies?</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la
        configuración de las opciones del navegador instalado en tu dispositivo:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>
      <p>
        Ten en cuenta que si deshabilitas las cookies, algunas funcionalidades del sitio web
        podrían dejar de estar disponibles.
      </p>

      <h2>4. Cookies de terceros</h2>
      <p>
        Este sitio web puede utilizar servicios de terceros que, por cuenta propia, pueden
        recopilar información con fines estadísticos o de uso del sitio. Las políticas de
        privacidad de estos servicios están disponibles en sus respectivos sitios web:
      </p>
      <ul>
        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics — Política de privacidad</a></li>
        <li><a href="https://maps.google.com/help/terms_maps/" target="_blank" rel="noopener noreferrer">Google Maps — Términos de servicio</a></li>
      </ul>

      <h2>5. Actualización</h2>
      <p>
        Esta Política de Cookies puede actualizarse periódicamente para reflejar cambios en
        las cookies utilizadas o por motivos operativos, legales o regulatorios. Te
        recomendamos revisarla periódicamente.
      </p>

      <p>
        Si tienes cualquier duda sobre nuestra política de cookies, puedes contactarnos en{' '}
        <a href="mailto:info@starkamotor.es">info@starkamotor.es</a>.
      </p>
    </>
  );
}
