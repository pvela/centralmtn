import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionComponent } from './auction.component';

@NgModule({
    imports: [CommonModule, TranslateModule, AuctionRoutingModule],
    declarations: [AuctionComponent]
})
export class AuctionModule {}

