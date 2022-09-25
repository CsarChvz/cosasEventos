# Barras de Navegación

En esta carpeta llamada "NavigationBar" se tiene por el momento dos archivos los cuales son componentes para la barra de navegación que se van a colocar en el archivo root el cual es usado como "layout" de la aplicación.

Se tienen dos archivos los cuales cada uno es diferente entre sí, uno es para una barra de navegación normal y el otro es para una "SideBar", pero depende de como se decida el diseño del calendario de eventos es el que se va a usar.

## NavBar.tsx --> Cambiar el nombre del archivo

Este componente es mera mente de una librería llamada [daisyUI](https://daisyui.com/) la cual es una libreía que ya tiene componentes para tailwind definidos, en este caso se importo una barra de navegación que había de ejemplo para poder adjuntar la barra de navegación.

> Colocar más sobre el navbar

## SideBar

Se tomo como referencia la siguiente [página](https://tailwinduikit.com/components/webapp/master_layout/sidebar_layout) el cual se uso para buscar ideas, aunque no se siguio del todo el estilo para el diseño, algunas cosas cambiaron para poder adecuarlas en el diseño y también en la composición de la página. Ya que como el ejemplo usado para poder crear este componente, estaba un poco "inusual" ya que al momento de copiar y pegar la altura de este era menor, diseñada para un celular

> Colocar más sobre el sidebar

### {children} --> props

Esta propiedad de los componentes es usada para colocar el "hijo", el cual serán componentes, los cuales cuales son usados para mostrar la pantalla, este children va tener lo que sería los hijos de las demás hojas.

En cada componente del archivo se tiene esta propiedad. Lo que se tienen de peculiar es que los componentes tienen un "contenedor" el cual contienen a la barra de navegación o en dado el side bar y en otro lado sería los objetos que se le pasen a la propiedad "children"

> La siguiente imagen es una representación de los componentes o la estructura general que llevan.

![Alt text](/app/utils/img/representacion-Componente.png "Title")
