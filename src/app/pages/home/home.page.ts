import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { ClientsService } from '../../services/clients.service';
import { TravelsService } from '../../services/travels.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  clients: any[] = []
  clientsBackup: any[] = []
  numberSearch: any;
  travelsUser: any[] = []

  constructor(public ClientsService: ClientsService,
    public alertController: AlertController,
    private travelsService: TravelsService) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.getAllClients()
  }

  getAllClients() {
    this.ClientsService.all()
      .subscribe(response => {
        this.clients = response.data;
        this.clientsBackup = response.data;
      })
  }

  searchClient() {
    this.travelsUser = []
    if (!this.numberSearch) {
      return this.clients = this.clientsBackup;
    }
    this.clients = this.clientsBackup.filter(x => x.telefono == this.numberSearch)

    if (this.clients.length > 0) {
      this.loadTravels(this.clients[0])
    }
  }

  deleteUser(id) {
    this.ClientsService.remove(id)
      .subscribe(data => {
        this.getAllClients()
      })
  }


  loadTravels(client) {
    this.travelsService.userTravels(client.email)
      .subscribe(data => {
        this.travelsUser = data;
      })
  }



  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: '¿ Estas seguro ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.deleteUser(id)
          }
        }
      ]
    });

    await alert.present();
  }

}
