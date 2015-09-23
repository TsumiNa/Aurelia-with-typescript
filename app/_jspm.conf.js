/* global System */
System.config({
  typescriptOptions: {
    "noImplicitAny": true,
    "typeCheck": false,
    "noLib": true,
    "resolveAmbientRefs": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },

  packages: {
    "app": {
      "main": "app",
      "defaultExtension": "ts"
    }
  }
})