{
    $jsonSchema: {
      required: [
        '_id',
        'nif',
        'nombre',
        'apellido1',
        'apellido2',
        'ciudad',
        'dirrecion',
        'telefono',
        'fecha_nacimiento',
        'sexo',
        'tipo'
      ],
      properties: {
        _id: {
          bsonType: 'objectId',
          description: 'El _id es obligatorio y de tipo objectId'
        },
        nif: {
          bsonType: 'string',
          description: 'El nif es obligatorio y de tipo string'
        },
        nombre: {
          bsonType: 'string',
          pattern: '^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$',
          description: 'El nombre del grado es obligatorio y de tipo string'
        },
        apellido1: {
          bsonType: 'string',
          pattern: '^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$',
          description: 'El primer apellido del es obligatorio y de tipo string'
        },
        apellido2: {
          bsonType: 'string',
          pattern: '^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$',
          description: 'El segundo apellido del es obligatorio y de tipo string'
        },
        ciudad: {
          bsonType: 'string',
          description: 'La ciudad es obligatorio y de tipo string'
        },
        dirrecion: {
          bsonType: 'string',
          description: 'La dirrecion es obligatorio y de tipo string'
        },
        telefono: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: [
              'tipo',
              'numero'
            ],
            properties: {
              tipo: {
                'enum': [
                  'celular',
                  'fijo'
                ],
                description: 'Solo se puede dos tipo \'celular\' o \'fijo\''
              },
              numero: {
                bsonType: 'int',
                description: 'Envie numeros'
              }
            },
            additionalProperties: false
          }
        },
        fecha_nacimiento: {
          bsonType: 'date',
          description: 'El fecha de nacimiento es obligatorio'
        },
        sexo: {
          'enum': [
            'M',
            'H'
          ],
          description: 'Solo se acepta \'H\' Hombre o \'M\' Mujer'
        },
        tipo: {
          'enum': [
            'alumno',
            'profesor'
          ],
          description: 'Solo se acepta \'alumno\' o \'profesor\''
        },
        asignatura: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId',
            description: 'Selecione una asignatura'
          },
          description: 'Envie la lista de asignatura que dictara el profesor'
        }
      },
      additionalProperties: false
    }
  }