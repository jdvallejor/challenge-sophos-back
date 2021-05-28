import CatalogItem from '../models/catalogItem'

const seed = async () => {
    const catalogItems = await CatalogItem.find({}).exec();
    if (catalogItems.length === 0) {
        const newcatalogItems = [
            {
                title: 'La naranja mecánica',
                year: 1971,
                type: 'pelicula',
                likes: 1000
            },
            {
                title: 'El quinto elemento',
                year: 1997,
                type: 'pelicula',
                likes: 6000
            },
            {
                title: 'Troya',
                year: 2004,
                type: 'pelicula',
                likes: 1200
            },
            {
                title: 'Parasito',
                year: 2019,
                type: 'pelicula',
                likes: 5000
            },
            {
                title: 'Juego de tronos',
                year: 2011,
                type: 'serie',
                likes: 1
            },
            {
                title: 'Mr. Robot',
                year: 2015,
                type: 'serie',
                likes: 13000
            },
            {
                title: 'Breaking Bad',
                year: 2008,
                type: 'serie',
                likes: 16000
            },
            {
                title: 'Vikingos',
                year: 2013,
                type: 'serie',
                likes: 450
            },
            {
                title: 'The walking death',
                year: 2010,
                type: 'serie',
                likes: 2
            },
            {
                title: 'Stranger things',
                year: 2016,
                type: 'serie',
                likes: 2000
            }
        ]
        await CatalogItem.insertMany(newcatalogItems)
    }
}

export { seed }