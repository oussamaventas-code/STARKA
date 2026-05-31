import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y protección de datos de Starka Motor S.L. conforme al RGPD.',
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <h1>Política de Privacidad</h1>

      <p>
        En STARKA MOTOR S.L. nos comprometemos a proteger tu privacidad. Esta Política de
        Privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal
        de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica
        3/2018 de Protección de Datos Personales y garantía de los derechos digitales
        (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> STARKA MOTOR S.L.</li>
        <li><strong>CIF/NIF:</strong> B73107146</li>
        <li><strong>Dirección:</strong> Carril los Uñas, 162, 30009 La Albatalía, Murcia</li>
        <li><strong>Email:</strong> info@starkamotor.es</li>
        <li><strong>Teléfono:</strong> 968 29 70 00</li>
      </ul>

      <h2>2. Datos que recopilamos</h2>
      <p>Podemos recopilar los siguientes datos personales:</p>
      <ul>
        <li>Nombre y apellidos</li>
        <li>Número de teléfono</li>
        <li>Dirección de correo electrónico</li>
        <li>Datos del vehículo (matrícula, marca, modelo)</li>
        <li>Datos de navegación (cookies técnicas y analíticas)</li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <p>Tratamos tus datos personales para las siguientes finalidades:</p>
      <ul>
        <li>Gestión de citas y servicios de reparación de vehículos.</li>
        <li>Comunicación con el cliente sobre el estado de las reparaciones.</li>
        <li>Elaboración de presupuestos y facturación.</li>
        <li>Envío de recordatorios de mantenimiento, solo con consentimiento previo.</li>
        <li>Cumplimiento de obligaciones legales y fiscales.</li>
      </ul>

      <h2>4. Base legal</h2>
      <p>El tratamiento de tus datos se fundamenta en:</p>
      <ul>
        <li><strong>Ejecución de un contrato:</strong> para la prestación de servicios de reparación y mantenimiento.</li>
        <li><strong>Consentimiento:</strong> para el envío de comunicaciones comerciales.</li>
        <li><strong>Interés legítimo:</strong> para la mejora de nuestros servicios y la seguridad del sitio web.</li>
        <li><strong>Obligación legal:</strong> para el cumplimiento de obligaciones fiscales y contables.</li>
      </ul>

      <h2>5. Conservación de datos</h2>
      <p>
        Los datos personales se conservarán durante el tiempo necesario para cumplir con la
        finalidad para la que se recabaron y para determinar las posibles responsabilidades
        que se pudieran derivar de dicha finalidad. Se aplicarán los siguientes plazos:
      </p>
      <ul>
        <li><strong>Datos de clientes:</strong> durante la relación comercial y 5 años adicionales.</li>
        <li><strong>Datos fiscales:</strong> 4 años (obligación tributaria).</li>
        <li><strong>Datos de contacto (formularios):</strong> 12 meses desde la última comunicación.</li>
      </ul>

      <h2>6. Derechos del interesado</h2>
      <p>Puedes ejercer los siguientes derechos en cualquier momento:</p>
      <ul>
        <li><strong>Acceso:</strong> conocer qué datos personales tratamos.</li>
        <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
        <li><strong>Limitación:</strong> solicitar la limitación del tratamiento.</li>
        <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado.</li>
        <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos.</li>
      </ul>
      <p>
        Para ejercer estos derechos, contacta con nosotros en{' '}
        <a href="mailto:info@starkamotor.es">info@starkamotor.es</a> o en nuestro
        domicilio, adjuntando copia de tu DNI o documento identificativo equivalente.
      </p>
      <p>
        También tienes derecho a presentar una reclamación ante la Agencia Española de
        Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si
        consideras que el tratamiento no se ajusta a la normativa vigente.
      </p>

      <h2>7. Destinatarios de los datos</h2>
      <p>
        No se cederán datos a terceros salvo obligación legal. Podrán tener acceso a tus
        datos los proveedores de servicios necesarios para la actividad (gestoría, software
        de gestión) con los que se han suscrito los correspondientes contratos de encargo de
        tratamiento.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        STARKA MOTOR S.L. ha adoptado las medidas técnicas y organizativas necesarias para
        garantizar la seguridad e integridad de los datos personales, evitando su alteración,
        pérdida, tratamiento o acceso no autorizado.
      </p>
    </>
  );
}
