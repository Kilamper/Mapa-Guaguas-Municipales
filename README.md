# Mapa Guaguas Municipales 🚌

Aplicación web interactiva que visualiza en 3D las rutas y paradas del sistema de transporte público de guaguas municipales. Utiliza Three.js para crear un mapa tridimensional inmersivo con datos reales de rutas, paradas y horarios.

## 🌟 Características

- **Visualización 3D**: Mapa tridimensional interactivo del sistema de transporte
- **Datos reales**: Información actualizada desde datos.gob.es
- **Rutas animadas**: Visualización del movimiento de guaguas en tiempo real
- **Interfaz intuitiva**: Menú desplegable para seleccionar rutas específicas
- **Modelos 3D**: Señales y elementos realistas en el mapa
- **Controles de navegación**: Exploración completa del mapa 3D

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16.x)
- npm o yarn

### Instalación
```bash
npm install
```

### Ejecución
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 📝 Estructura del Proyecto

```
├── server.js              # Servidor Express principal
├── package.json           # Dependencias y configuración del proyecto
├── views/
│   └── index.html         # Página principal de la aplicación
├── public/
│   ├── mapa_guaguas.js     # Script principal de visualización 3D
│   ├── render_objects.js   # Funciones para cargar modelos 3D
│   └── style.css          # Estilos de la aplicación
└── node_modules/          # Módulos de Node.js
```

## 🛠️ Tecnologías utilizadas

### Frontend
- **Three.js**: Biblioteca JavaScript para gráficos 3D
- **GLTFLoader**: Cargador de modelos 3D en formato GLTF
- **MapControls**: Controles de navegación para mapas 3D
- **HTML5 & CSS3**: Estructura y estilos de la interfaz

### Backend
- **Node.js**: Entorno de ejecución JavaScript del servidor
- **Express.js**: Framework web minimalista y flexible

### Datos
- **CSV Processing**: Procesamiento de archivos de datos públicos
- **datos.gob.es**: Fuente oficial de datos gubernamentales

## 🕹️ Cómo usar

1. **Cargar la aplicación**: Abre tu navegador y accede a la URL donde esté desplegada
2. **Explorar el mapa**: Usa los controles del mouse para navegar por el mapa 3D:
   - **Clic izquierdo + arrastrar**: Rotar la vista
   - **Rueda del mouse**: Hacer zoom
   - **Clic derecho + arrastrar**: Desplazar la vista
3. **Seleccionar rutas**: Utiliza el menú desplegable para elegir una ruta específica
4. **Ver animaciones**: Observa el movimiento de las guaguas a lo largo de sus rutas
5. **Explorar paradas**: Las paradas se muestran como modelos 3D en el mapa

## 📦 Dependencias principales

- **[Express.js](https://expressjs.com/)**: Framework web rápido, minimalista y flexible para Node.js
- **[Three.js](https://threejs.org/)**: Biblioteca JavaScript para crear y mostrar gráficos 3D animados
- **[GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)**: Cargador para modelos 3D en formato GLTF
- **[MapControls](https://threejs.org/docs/#examples/en/controls/MapControls)**: Controles especializados para navegación de mapas

## 📊 Fuentes de Datos

El proyecto utiliza datos abiertos del gobierno español disponibles en [datos.gob.es](https://datos.gob.es/es/catalogo?q=Guaguas+Municipales&sort=score+desc%2C+metadata_created+desc):

| Archivo | Descripción |
|---------|-------------|
| `stops.csv` | Información sobre ubicación y detalles de paradas |
| `trips.csv` | Datos de viajes y servicios de transporte |
| `routes.csv` | Definición de rutas y líneas de guaguas |
| `shapes.csv` | Geometría y trazado de las rutas |
| `stop_times.csv` | Horarios y secuencia de paradas por viaje |

## 🎨 Modelos 3D utilizados

- **[Bus Sign](https://sketchfab.com/3d-models/bus-sign-76333622b3464662adb87ccb8d3c3e28)**: Modelo 3D de señal de parada
  - *Créditos*: [Decoratopia](https://decoratopia.com/)
  - *Uso*: Visualización de paradas en el mapa

## 🎆 Características técnicas

- **Renderizado 3D en tiempo real** con WebGL
- **Carga asíncrona** de datos CSV
- **Animaciones suaves** de vehículos
- **Interfaz responsiva** compatible con dispositivos móviles
- **Optimización de rendimiento** para grandes conjuntos de datos

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

📍 **Visualiza el transporte público como nunca antes con tecnología 3D moderna**
