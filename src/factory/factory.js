class VueFactory {
    createVueComponent(Controller, ...args) {
        const controller = new Controller(...args);
        const methodNames = Object.getOwnPropertyNames(Controller.prototype);
        const propertyNames = Object.keys(controller);

        const methods = methodNames.reduce((result, name) => {
            if (name === 'constructor') return result;

            result[name] = controller[name];
            return result;
        }, {});
        const properties = propertyNames.reduce((result, property) => {
            result[property] = controller[property];
            return result;
        }, {});
        
        console.log('Properties', properties);
        return { data() { return properties }, methods };
    }
}

const factory = new VueFactory();

export default function createVueComponent(name, controller, ...args) {
    const component = factory.createVueComponent(controller, ...args);

    return {
        name,
        ...component
    }
}

