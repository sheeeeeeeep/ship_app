import {Injectable} from '@angular/core';
import {SQLite} from 'ionic-native';
@Injectable()


export class GlobalVars { 
	private storage: SQLite;
    private isOpen: boolean;
	myGlobalVar = "asd";

    public constructor() {
        // if(!this.isOpen) {
        //     this.storage = new SQLite();
        //     this.storage.openDatabase({name: "data.db", location: "default"}).then(() => {
        //         this.storage.executeSql("CREATE TABLE IF NOT EXISTS notif (id INTEGER PRIMARY KEY AUTOINCREMENT, text1 TEXT, tex2 TEXT)", []);
        //         this.isOpen = true;
        //     });
        // }
        // new Promise((resolve, reject) => {
        //     this.storage.executeSql("INSERT INTO notif (text1, text2) VALUES (?, ?)", ['aaa', 'bbb']).then((data) => {
        //         resolve(data);
        //     }, (error) => {
        //         reject(error);
        //     });
        // });
    }

	public getMyGlobalVar() { 
		return new Promise((resolve, reject) => {
            this.storage.executeSql("SELECT * FROM notif", []).then((data) => {
                let notif = [];
                if(data.rows.length > 0) {
                    for(let i = 0; i < data.rows.length; i++) {
                        notif.push({
                            id: data.rows.item(i).id,
                            text1: data.rows.item(i).text2,
                            text2: data.rows.item(i).text2
                        });
                    }
                }
                resolve(notif);
            }, (error) => {
                reject(error);
            });
        }); 
	}

	public setMyGlobalVar(text1:string, text2:string) { 
		return new Promise((resolve, reject) => {
            this.storage.executeSql("INSERT INTO notif (text1, text2) VALUES (?, ?)", [text1, text2]).then((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        });
	}
}
