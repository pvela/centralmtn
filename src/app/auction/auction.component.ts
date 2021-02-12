import { Component, OnInit } from '@angular/core';
import { WEB3PROVIDER } from '../shared/services/web3-provider';
import { SuperfluidSDK } from '@superfluid-finance/js-sdk';


@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    const sf = new SuperfluidSDK.Framework({
      ethers: WEB3PROVIDER,
      tokens: ['fDAI']
    });

    await sf.initialize();
    const pv = sf.user({
      address: '0x7a22e36fc847b379B358d97daE992cC5EA9c4EeA',
      token: '0x8ae68021f6170e5a766be613cea0d75236ecca9a'
    });
    await pv.flow({
      recipient: '0x292039727d563aA9c4cC9CAeee077872B9BC7140',
      flowRate: 385802469135802
    });
  }
}
