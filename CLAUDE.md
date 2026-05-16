# Portfolio web personal de Marco Pozo

SPA frontend hecha con React y TypeScript usando Vite como build tool. El objetivo es tener un portfolio profesional con secciones de proyectos, about, contacto e info general. También sirve como proyecto de aprendizaje de TypeScript. Manejamos las con React Router. Los estilos son CSS vanilla con metodología BEM.

## Reglas generales

Los comentarios tienen que ser minimalistas. Nada de separadores decorativos con guiones, signos de igual o asteriscos. Si necesitás titular una sección en un archivo, simplemente escribís el nombre así:

```
// Tipos de navegación
```

o si es un bloque más largo:

```
/*
Tipos de navegación
*/
```

Nada de `// ============ Tipos ============` ni `// --- Tipos ---`. Se ve innecesariamente ruidoso.

## Interfaces y tipos

Todas las interfaces y tipos de TypeScript van en src/types/index.ts. No se definen tipos locales dentro de los componentes a menos que sea algo muy específico que no tenga sentido compartir. Cuando importes tipos desde esa carpeta siempre usá import type en lugar de import normal.

## Variables CSS

Prohibido hardcodear colores, tamaños, espaciados o cualquier valor visual. Siempre usá variables de src/styles/variables.css. Si la variable que necesitás no existe, la creás ahí y después la usás.

## Componentes Layout

Los componentes de layout como Navbar, Footer y Layout siguen la misma estructura que las páginas: cada uno en su propia subcarpeta con su archivo tsx, su css y su index.ts para reexportar.
