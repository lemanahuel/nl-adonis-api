const BaseModel = use('MongooseModel')

class Task extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // Indexes:
    // this.index({}, {background: true})
    // Virtuals, etc:
    // schema.virtual('something').get(.......)
  }
  static get schema() {
    return {
      title: {
        type: String,
        trim: true
      },
      description: {
        type: String,
        trim: true
      },
      images: [{
        type: String,
        trim: true
      }],
      completed: {
        type: Boolean,
        default: false
      },
      enable: {
        type: Boolean,
        default: true
      }
    }
  }

  static get timestamps() {
    return false
  }
}

module.exports = Task.buildModel('Tasks')