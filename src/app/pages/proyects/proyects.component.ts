import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface ProyectsUI {
  semana: number,
  name: string,
  resumen: string,
  imagen?: string
}
@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {
  activarAnimacion = false
  contador: number = 0
  proyects: Array<ProyectsUI> = [
    { semana: 1, name: 'Herramientas Clave en el Desarrollo Web', resumen: 'He obtenido conocimientos en el ámbito del desarrollo web, que engloba diversas especialidades. Esto incluye a los desarrolladores frontend, encargados de la apariencia visual de los sitios web mediante tecnologías como HTML, CSS y JavaScript, y a los desarrolladores backend, quienes trabajan en la infraestructura y la lógica que respaldan el funcionamiento de un sitio web utilizando lenguajes como Python o Java. Asimismo, he comprendido la relevancia de los desarrolladores fullstack, que dominan ambas áreas para obtener una visión completa del proceso de desarrollo. También he descubierto que una herramienta esencial en este campo es Visual Studio Code, un entorno de desarrollo versátil que facilita la creación, edición y depuración de código en diversos lenguajes. Este software cuenta con extensiones que agilizan el trabajo al proporcionar atajos y sugerencias de código.', imagen: 'qweqwe' },
    { semana: 2, name: ' Estructura Básica de una Página Web y Sus Componentes', resumen: 'He adquirido conocimientos acerca de que la construcción de una página web es un procedimiento que involucra el uso de lenguajes de marcado como HTML y XML, siguiendo los estándares de la Plataforma Web Abierta. Este proceso incluye la estructuración del contenido mediante etiquetas HTML5, la representación del Document Object Model (DOM) como un árbol, y la comprensión del ciclo de vida de una página web. También he comprendido la relevancia de optimizar la página para los motores de búsqueda (SEO) y asegurar su compatibilidad con diversos navegadores. ', imagen: 'qweqwe' },
    { semana: 3, name: ' Fundamentos de HTML para Crear Páginas Web', resumen: 'He adquirido conocimientos fundamentales en el uso de HTML, que es la base fundamental para la construcción de páginas web. Ahora tengo la capacidad de crear una estructura básica de página web utilizando etiquetas como <html> para definir el inicio del documento, <head> para incluir metadatos como el título de la página, y <body> para el contenido visible. Además, he aprendido a emplear etiquetas como <h1> para encabezados, <p> para párrafos, <a> para enlaces y <img> para insertar imágenes en una página web. También comprendo cómo organizar elementos en listas utilizando <ul> y <li>, y cómo dar formato al texto con <strong> para negritas y <em> para cursivas. Estos conocimientos me proporcionan una base sólida para comenzar a crear páginas web simples y me motivan a seguir explorando y aprendiendo sobre el desarrollo web y sus diversas posibilidades.', imagen: 'qweqwe' },
    { semana: 4, name: ' Estilo en la Creación Web mediante CSS', resumen: 'He adquirido conocimientos fundamentales en el uso de CSS (Cascading Style Sheets) para conferir estilo y diseño a las páginas web que construyo con HTML. Ahora tengo la capacidad de aplicar estilos a elementos HTML mediante selectores, propiedades y valores CSS. Puedo ajustar colores de fondo y texto, modificar márgenes y espaciados, definir fuentes y tamaños de texto, y crear diseños de página personalizados utilizando propiedades como display, position y float. Además, he comprendido cómo emplear selectores de clases y de ID para aplicar estilos específicos a elementos individuales o grupos de elementos. Estos conocimientos en CSS me habilitan para dar vida a mis páginas web y mejorar de manera significativa su apariencia y presentación.', imagen: 'qweqwe' },
    { semana: 5, name: ' CSS: Flexbox, Diseño Fluid y Diseño Responsivo', resumen: 'He obtenido conocimientos sustanciales sobre tres aspectos fundamentales en el diseño web: el diseño flexbox, el diseño fluido y el diseño responsivo, todos impulsados por la integración de Google Fonts. El diseño flexbox me ha brindado la capacidad de crear diseños versátiles y eficientes, ajustando automáticamente los elementos dentro de un contenedor para adaptarse perfectamente a una amplia variedad de tamaños de pantalla. Por otro lado, el diseño fluido me ha enseñado cómo crear diseños que fluyen de manera armoniosa en diversos dispositivos, garantizando una experiencia de usuario uniforme y agradable.', imagen: 'qweqwe' },
    { semana: 6, name: ' Desarrollo Web: JavaScript con Canvas', resumen: 'He aprendido a emplear JavaScript para trabajar con el elemento Canvas en el desarrollo web. Gracias a JavaScript, he adquirido conocimientos para introducir interactividad y funcionalidad en mis sitios web, posibilitando la manipulación dinámica de contenido y la respuesta a eventos del usuario. Además, la utilización de Canvas me ha otorgado la capacidad de crear gráficos y animaciones en tiempo real, proporcionando una dimensión visual y creativa a mis proyectos web. Estas habilidades me han proporcionado una comprensión sólida de cómo hacer que mis sitios web sean más dinámicos y visuales, mejorando la experiencia del usuario de manera significativa.', imagen: 'qweqwe' },
    { semana: 7, name: 'Parcial 01', resumen: 'Todavia no', imagen: 'qweqwe' }
  ]
  siguiente() {
    this.contador = this.contador + 1
    setTimeout(() => {
      this.activarAnimacion = true
    }, 2000)
  }

  atras() {
    this.contador = this.contador - 1
  }


}

