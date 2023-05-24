// Clase modelo del recurso
class Recurso {
    constructor(id, data) {
      this.id = id;
      this.data = data;
    }
  }
  
  // Clase controladora del recurso
  class RecursoController {
    constructor() {
      this.recursos = [];
    }
  
    getRecurso(id) {
      return this.recursos.find((recurso) => recurso.id === id);
    }
  
    createRecurso(data) {
      const id = this.recursos.length + 1;
      const nuevoRecurso = new Recurso(id, data);
      this.recursos.push(nuevoRecurso);
      return nuevoRecurso;
    }
  
    getAllRecursos() {
      return this.recursos;
    }
  
    updateRecurso(id, newData) {
      const recurso = this.getRecurso(id);
      if (recurso) {
        recurso.data = newData;
        return recurso;
      }
      return null;
    }
  
    deleteRecurso(id) {
      const index = this.recursos.findIndex((recurso) => recurso.id === id);
      if (index !== -1) {
        const deletedRecurso = this.recursos.splice(index, 1)[0];
        return deletedRecurso;
      }
      return null;
    }
  }
  
  // Clase router del recurso
  class RecursoRouter {
    constructor() {
      this.controller = new RecursoController();
    }
  
    handleRequest(req) {
      const { method, url } = req;
  
      if (method === 'GET' && url === '/recurso/create') {
        return this.createForm();
      } else if (method === 'POST' && url === '/recurso/') {
        const data = {}; // Obtén los datos del cuerpo de la solicitud
        return this.createRecurso(data);
      } else if (method === 'GET' && url === '/recurso/') {
        return this.getAllRecursos();
      } else if (method === 'GET' && url.startsWith('/recurso/')) {
        const id = url.split('/')[2];
        if (url.endsWith('/edit')) {
          return this.editForm(id);
        }
        return this.getRecurso(id);
      } else if (method === 'PUT' && url.startsWith('/recurso/')) {
        const id = url.split('/')[2];
        const newData = {}; // Obtén los nuevos datos del cuerpo de la solicitud
        return this.updateRecurso(id, newData);
      } else if (method === 'DELETE' && url.startsWith('/recurso/')) {
        const id = url.split('/')[2];
        return this.deleteRecurso(id);
      }
  
      // Endpoint no encontrado
      return 'Endpoint no encontrado';
    }
  
    createForm() {
      // Lógica para mostrar el formulario de creación de recursos
      return 'Formulario de creación de recurso';
    }
  
    createRecurso(data) {
      const nuevoRecurso = this.controller.createRecurso(data);
      return `Recurso creado con ID ${nuevoRecurso.id}`;
    }
  
    getAllRecursos() {
      const recursos = this.controller.getAllRecursos();
      return `Listado de recursos: ${recursos.map((recurso) => recurso.id).join(', ')}`;
    }
  
    getRecurso(id) {
      const recurso = this.controller.getRecurso(id);
      if (recurso) {
        return `Datos del recurso con ID ${recurso.id}: ${JSON.stringify(recurso.data)}`;
      }
      return 'Recurso no encontrado';
    }
  
    editForm(id) {
      // Lógica para mostrar el formulario de edición de recursos
      return `Formulario de edición del recurso con ID ${id}`;
    }
  
    updateRecurso(id, newData) {
      const recurso = this.controller.updateRecurso(id, newData);
      if (recurso) {
        return `Recurso con ID ${recurso.id} actualizado: ${JSON.stringify(recurso.data)}`;
      }
      return 'Recurso no encontrado';
    }
  
    deleteRecurso(id) {
      const recurso = this.controller.deleteRecurso(id);
      if (recurso) {
        return `Recurso con ID ${recurso.id} eliminado`;
      }
      return 'Recurso no encontrado';
    }
  }
  
  // Uso de la librería
  const router = new RecursoRouter();
  const req1 = { method: 'GET', url: '/recurso/1' };
  console.log(router.handleRequest(req1));
  const req2 = { method: 'POST', url: '/recurso/' };
  console.log(router.handleRequest(req2));
  const req3 = { method: 'GET', url: '/recurso/' };
  console.log(router.handleRequest(req3));
  const req4 = { method: 'GET', url: '/recurso/create' };
  console.log(router.handleRequest(req4));
  