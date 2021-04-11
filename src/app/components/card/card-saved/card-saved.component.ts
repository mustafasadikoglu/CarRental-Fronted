import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card';
import { Customer } from 'src/app/models/customer';
import { CardService } from 'src/app/services/card.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-card-saved',
  templateUrl: './card-saved.component.html',
  styleUrls: ['./card-saved.component.css'],
})
export class CardSavedComponent implements OnInit {
  cards: Card[];
  currentCustomer: Customer;
  customerId:number = this.localStorageService.getCurrentCustomer().id;
  @Output() selectedCard: EventEmitter<Card> = new EventEmitter<Card>();

  constructor(
    private cardService: CardService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getCardsByCustomerId(this.customerId);
  }

  getCardsByCustomerId(customerId: number) {
    this.cardService.getCardsByCustomerId(customerId).subscribe((response) => {
      this.cards = response.data;
    });
  }

  selectCard(cardId: number) {
    let selectedCard = this.cards.find(card => card.id == cardId);

    // @ts-ignore
    let newSelectedCard: Card = {
       cardNameSurname: selectedCard.cardNameSurname,
       cardNumber: selectedCard.cardNumber,
       validDate: selectedCard.validDate,
       customerId: selectedCard.customerId,
       cvv: selectedCard.cvv
    };

    this.selectedCard.emit(newSelectedCard);
 }
}
