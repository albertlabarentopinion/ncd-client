/// <reference path="../../typings/tsd.d.ts" />

module App.Services {

    export class DataHelper {
        
        constructor(private data : any) {
            this.data = data;
        }

        parseDates = (dateKeys : string[]) => {

        }

        getAge = (birthdate : string) => {
            moment(birthdate).diff(moment(), 'year');
        }

    }

}