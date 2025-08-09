import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AccordionItem {
  title: string;
  content: string[];
  open: boolean;
  height: number;
}

interface Section {
  title: string;
  items: AccordionItem[];
}

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-and-conditions.component.html',
})
export class TermsAndConditionsComponent implements AfterViewInit {
  @ViewChildren('content') contents!: QueryList<ElementRef>;

  showBanner: boolean = true;

  constructor() {
    this.showBanner = true;
    localStorage.removeItem('bannerClosed');
  }

  closeBanner() {
    this.showBanner = false;
    sessionStorage.setItem('bannerClosed', 'true');
  }

    sections: Section[] = [
    {
      title: 'Registration and Account',
      items: [
        {
          title: 'Create an Account',
          content: ['Create an Accountt'],
          open: false,
          height: 0,
        },
        {
          title: 'Service Account Management',
          content: ['Service Account Management'],
          open: false,
          height: 0,
        },
        {
          title: 'Responsible Gaming',
          content: ['Responsible Gaming'],
          open: false,
          height: 0,
        },
        {
          title: 'Active and Inactive Accounts',
          content: ['Active and Inactive Accounts'],
          open: false,
          height: 0,
        },
      ],
    },
    {
      title: 'Service Policies',
      items: [
        {
          title: 'Chargeback',
          content: ['Details about chargeback...'],
          open: false,
          height: 0,
        },
        {
          title: 'Close an Account',
          content: ['Details about account closure...'],
          open: false,
          height: 0,
        },
        {
          title: 'Deposit Rules',
          content: ['Details about deposit rules...'],
          open: false,
          height: 0,
        },
        {
          title: 'Withdrawal Policy',
          content: ['Details about withdrawal policy...'],
          open: false,
          height: 0,
        },
        {
          title: 'Refund Policy',
          content: ['Details about refund policy...'],
          open: false,
          height: 0,
        },
      ],
    },
    {
      title: 'Deposits & Withdrawals',
      items: [
        {
          title: 'Anti-Money Laundering Policy',
          content: ['Details about AML policy...'],
          open: false,
          height: 0,
        },
        {
          title: 'Disclaimer of Liabilities',
          content: ['Details about liabilities...'],
          open: false,
          height: 0,
        },
        {
          title: 'Collusion, Cheating, Fraud and Criminal Activity',
          content: ['Details about collusion and fraud...'],
          open: false,
          height: 0,
        },
        {
          title: 'Closure of the Account',
          content: ['Details about closure of account...'],
          open: false,
          height: 0,
        },
        {
          title: 'Termination of the Terms of Use',
          content: ['Details about termination...'],
          open: false,
          height: 0,
        },
        {
          title: 'Closure and Termination by You',
          content: ['Details about closure by user...'],
          open: false,
          height: 0,
        },
      ],
    },
  ];

  ngAfterViewInit() {
    this.contents.forEach((el, i) => {
      const sectionIndex = Math.floor(i / 10);
      const accordionIndex = i % 10;
      const section = this.sections[sectionIndex];
      if (section && section.items[accordionIndex]) {
        section.items[accordionIndex].height = el.nativeElement.scrollHeight;
      }
    });
  }

  toggle(section: Section, item: AccordionItem) {
    item.open = !item.open;
    setTimeout(() => {
      this.contents.forEach((el, i) => {
        const index = this.sections.flatMap((s) => s.items).indexOf(item);
        if (index >= 0 && el && i === index) {
          item.height = el.nativeElement.scrollHeight;
        }
      });
    }, 0);
  }
}
