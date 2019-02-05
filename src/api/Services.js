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

// https://api.graph.cool/simple/v1/cjrrvm4yh3fj101725hecottw