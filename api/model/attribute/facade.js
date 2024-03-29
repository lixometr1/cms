const Facade = require('../../lib/facade')
const Attribute = require('./schema')
const attributeValueFacade = require('../attributeValue/facade')
const Modification = require('./modification')
class AttributeFacade extends Facade {
    constructor(...args) {
        super(...args)
        this.relations = [{
            model: 'Product',
            async resolver({ model, id }) {
                const result = await model.updateMany({ 'attributes.name': id }, { $pull: { attributes: { name: id } } }, { multi: true })
                return result
            }
        }, {
            model: "AttributeValue",
            async resolver({ model, id }) {
                const result = await model.deleteMany({ attributeId: id })
                return result
            }
        }]
    }

    async findValuesById(id) {
        const attribute = await this.findById(id)
        if (!attribute) return []
        const values = await attributeValueFacade.find({ attributeId: attribute._id.toString() })
        return values
    }

}

module.exports = new AttributeFacade('Attribute', Attribute)
