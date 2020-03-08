import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TravelsService } from '../../services/travels.service'

@Component({
  selector: 'app-travels-user',
  templateUrl: './travels-user.page.html',
  styleUrls: ['./travels-user.page.scss'],
})
export class TravelsUserPage implements OnInit {

  id;
  travelsUser: any[] = [];


  constructor(private travelsService: TravelsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("email");
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.getTravels()
  }

  getTravels() {
    this.travelsService.userTravels(this.id)
      .subscribe(data => {
        this.travelsUser = data;
      })
  }

}
