import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Starka Motor S.L., taller mecánico multimarca en La Albatalía, Murcia.',
};

export default function AvisoLegal() {
  return (
    <>
      <h1>Aviso Legal</h1>

      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa al usuario de
        los datos del titular de este sitio web:
      </p>
      <ul>
        <li><strong>Denominación social:</strong> STARKA MOTOR S.L.</li>
        <li><strong>CIF/NIF:</strong> B73107146</li>
        <li><strong>Domicilio:</strong> Carril los Uñas, 162, 30009 La Albatalía, Murcia</li>
        <li><strong>Teléfono:</strong> 968 29 70 00</li>
        <li><strong>Email:</strong> info@starkamotor.es</li>
        <li><strong>Sitio web:</strong> starkamotor.es</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente aviso legal regula el uso y acceso al sitio web starkamotor.es (en adelante,
        el «Sitio Web»), propiedad de STARKA MOTOR S.L. La navegación por el Sitio Web atribuye
        la condición de usuario e implica la aceptación plena y sin reservas de todas las
        disposiciones incluidas en este Aviso Legal.
      </p>

      <h2>3. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del Sitio Web, incluyendo textos, fotografías, gráficos, imágenes,
        iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así
        como su diseño gráfico y códigos fuente, son propiedad intelectual de STARKA MOTOR S.L. o
        de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de
        explotación reconocidos por la normativa vigente en materia de propiedad intelectual.
      </p>
      <p>
        Las marcas, nombres comerciales o signos distintivos son propiedad de STARKA MOTOR S.L. o
        de terceros, sin que pueda entenderse que el acceso al Sitio Web atribuye ningún
        derecho sobre las citadas marcas.
      </p>

      <h2>4. Condiciones de uso</h2>
      <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que STARKA MOTOR S.L. ofrece a través de su Sitio Web y, con carácter enunciativo pero no limitativo, a no emplearlos para:</p>
      <ul>
        <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
        <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
        <li>Provocar daños en los sistemas físicos y lógicos de STARKA MOTOR S.L., de sus proveedores o de terceras personas.</li>
        <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
      </ul>

      <h2>5. Exclusión de responsabilidad</h2>
      <p>
        STARKA MOTOR S.L. no se hace responsable de los daños y perjuicios que pudieran derivarse
        de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o
        desconexiones en el funcionamiento operativo del sistema electrónico, motivados por
        causas ajenas a STARKA MOTOR S.L.
      </p>
      <p>
        Asimismo, STARKA MOTOR S.L. tampoco se hace responsable de retrasos o bloqueos en el uso
        causados por deficiencias o sobrecargas de Internet o en otros sistemas electrónicos,
        ni de la imposibilidad de dar el servicio o permitir el acceso por causas no imputables
        a STARKA MOTOR S.L.
      </p>

      <h2>6. Enlaces de terceros</h2>
      <p>
        Este Sitio Web puede contener enlaces a sitios web de terceros. STARKA MOTOR S.L. no asume
        ninguna responsabilidad por el contenido, informaciones o servicios que pudieran
        aparecer en dichos sitios, que se facilitan exclusivamente con carácter informativo y
        que en ningún caso implican relación, aprobación o respaldo alguno.
      </p>

      <h2>7. Legislación aplicable y jurisdicción</h2>
      <p>
        Para la resolución de todas las controversias o cuestiones relacionadas con el presente
        Sitio Web, será de aplicación la legislación española, a la que se someten expresamente
        las partes, siendo competentes para la resolución de todos los conflictos derivados o
        relacionados con su uso los Juzgados y Tribunales de Murcia.
      </p>
    </>
  );
}
