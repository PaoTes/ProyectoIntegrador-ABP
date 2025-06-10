# Proyecto ABP: Procesamiento de datos con APIs REST

---

## Contexto del Proyecto

Trabajo realizado en base a :

* **React**: Para construir la interfaz interactiva.
* **Tailwind CSS**: Para una experiencia visual moderna.
* **Axios**: Para consumir datos desde una API externa.
* **DummyJSON**: Como fuente de productos.
* **Conceptos básicos de ciencia de datos**: Estadística descriptiva, visualización, filtrado y procesamiento.

---

## Objetivo General

Desarrollar una aplicación web interactiva de análisis de productos que permita filtrar, ordenar, visualizar y analizar datos de productos de una API externa, incorporando visualizaciones, estadísticas, categorías y exportación de resultados.

---


---

## Cronograma realizado por Semanas

---

### Semana 1 – React + Axios + Búsqueda


**Tareas:**

* Partir del proyecto anterior: obtener productos desde `https://dummyjson.com/products`.
* Mostrar una lista de productos con su nombre y precio.
* Implementar un *input* de búsqueda.
* Mostrar mensajes si no hay coincidencias.
* Agregar botón para mostrar/ocultar estadísticas.
* Se utilizó `useState`, `useEffect`, `map`.


---

### Semana 2 – Tailwind + Componentización


**Tareas:**

* Configurar Tailwind en el proyecto.
* Crear componentes: `Header`, `ProductCard`, `SearchBar`, `ProductList`, `SortSelect`, `CategoryFilter`.
* Aplicar estilos responsivos.
* Se implemento Modo oscuro .


---

### Semana 3 – Filtrado Avanzado y Ordenamiento

**Tareas:**

* Se filtro por categoría (`category` de DummyJSON), mediante una etiqueta (`<select>`) que invoca a (`category-list` de DummyJSON).
*Se agregó ordenamiento por precio y *rating* (ascendente/descendente).
* Se mostro lista desplegable (`<select>`) para elegir criterios.


---

### Semana 4 – Estadísticas Detalladas



**Tareas:**

* Mostrar:
    * Precio promedio.
    * Precio máximo y mínimo.
    * Cantidad de productos por categoría.
    * Cantidad de productos con `stock` mayor a `0`.
    * Precio promedio por categoría.
    * Producto más caro y más barato por categoría.
    * Promedio de *rating* general y por categoría.

* Se utilizaron métodos como `reduce`, `filter`, `sort`.
* Aplicación de condicionales y manejo de errores.

---

### Semana 5 – Visualizaciones

**Tareas:**

* Integrar la librería `react-chartjs-2.js`.
* SE muestran los siguientes gráficos:
    * Gráfico de barras: cantidad de productos por categoría.
    * Gráfico de líneas: evolución de precios (simulada).
    * *Pie chart: proporción de productos según *stock*.
    * Se utilizo taildwind para mejorar la experienciia visual, agregando una barra lateral para evitar el desface del contenido del div.


