import React from 'react'

export default class Services {
    static getUser() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    name: 'Teste',
                    age: 24,
                    repository: 'http://github.com/kampgen'
                });
            }, 2000);
        });
    }
}
