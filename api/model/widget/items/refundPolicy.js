const WidgetModification = require("../modification");

module.exports = class RefundPolicy extends WidgetModification {
    constructor(...args) {
        super(...args)
        this.schema = {
            title: '',
            seo: {
                title: '',
                description: '',
                keywords: ''
            },
            content: ''

        }
    }

    // toINFO() {
    //     return {
    //         values: this.item.val
    //     }
    // }

}