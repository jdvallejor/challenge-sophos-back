import CatalogItem from '../models/catalogItem'

const catalogItemService = {
    all: async () => {
        return await CatalogItem.find({}).exec();
    },
    byType: async (type) => {
        return await CatalogItem.find({type: type}).exec();
    }
}

export { catalogItemService }