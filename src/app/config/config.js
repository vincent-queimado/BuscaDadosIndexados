module.exports = {
    'development': {
        'server': {
            'port': 3000,
        },
        'processing': {
            'path': './database/movies/data_sample/',
            'extension': '.txt',
            'delimiter': ' '
        },
    },
    'staging': {
        'server': {
            'port': 3000,
        },
        'processing': {
            'path': './database/movies/data/',
            'extension': '.txt',
            'delimiter': ' '
        },
    }
}