declare module 'gsplat' {
    export class Scene {
      constructor();
    }
  
    export class Camera {
      constructor();
    }
  
    export class WebGLRenderer {
      constructor(canvas: HTMLCanvasElement | null);
      render(scene: Scene, camera: Camera): void;
    }
  
    export class OrbitControls {
      constructor(camera: Camera, canvas: HTMLCanvasElement | null);
      update(): void;
    }
  
    export class Loader {
      static LoadAsync(url: string, scene: Scene): Promise<void>;
    }
  }