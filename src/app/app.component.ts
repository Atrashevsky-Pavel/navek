import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
    './app.component.categories.scss',
    './app.component.window.scss']
})
export class AppComponent {
  obj = [
    {
      name: `PrinCube-The World's Smallest`,
      text: `The project team has begun turning their prototype into the final product. Their ability to ship the products may be affected by product..`,
      company: `Rockers Technology`,
      point: 'Chicago, IL',
      funded: `2,348`,
      goal: `32,800`,
      days_left: `6`,
      width: '86.5%',
      img: 1
    },
    {
      name: `Help Me To Become A Doctor`,
      text: `I am a student looking for contribution to pay my college fee. I live in Delhi India.`,
      company: `Haji Idrus`,
      point: 'Delhi, In',
      funded: `23`,
      goal: `3,500`,
      days_left: `32`,
      width: '13.32%',
      img: 2
    },
    {
      name: `Testing A New Campaign`,
      text: `At this time due to Coronavirus -COVID-19 - we currently are unable to supply kits (any kits claimed prior to March 18th will still be fulfilled).`,
      company: `Rockers Technology`,
      point: 'Chicago, IL',
      funded: `546`,
      goal: `640`,
      days_left: `365`,
      width: '86.5%',
      img: 3
    },
    {
      name: `Real estate`,
      text: `The project team has begun turning their prototype into the final product. Their ability to ship the products may be affected by product..`,
      company: `Rockers Technology`,
      point: 'Chicago, IL',
      funded: `2,348`,
      goal: `32,800`,
      days_left: `6`,
      width: '86.5%',
      img: 4
    },
    {
      name: `Urban project`,
      text: `I am a student looking for contribution to pay my college fee. I live in Delhi India.`,
      company: `Haji Idrus`,
      point: 'Delhi, In',
      funded: `23`,
      goal: `3,500`,
      days_left: `32`,
      width: '13.32%',
      img: 5
    },
    {
      name: `PrinCube-The World's Smallest`,
      text: `The project team has begun turning their prototype into the final product. Their ability to ship the products may be affected by product..`,
      company: `Rockers Technology`,
      point: 'Chicago, IL',
      funded: `2,348`,
      goal: `32,800`,
      days_left: `6`,
      width: '86.5%',
      img: 6
    }
    ];
  categories = [
    `Business`, `Community`, 'Creative', 'Competition', `Event`, `Faith`,
    `Newlywedan`, `Sports`, `Wishes`, `Memorial`, `Family`, `Travel`,
    `Volunteer`, `Education`, `Nonprofit`, `Animals`, `Medical`, `Medical`
  ];
  objMin = [
    {
      name: `Real estate`,
      text: `The project team has begun turning their prototype into the final product. Their ability to ship the products may be..`,
      company: `Rockers Technology`,
      point: 'Chicago, IL',
      funded: `2,348`,
      goal: `32,800`,
      days_left: `6`,
      width: '86.5%',
      img: 1
    },
    {
      name: `PrinCube-The World's Smallest`,
      text: `The project team has begun turning their prototype into the final product. Their ability to ship the products may be..`,
      company: `Haji Idrus`,
      point: 'Delhi, In',
      funded: `2,348`,
      goal: `32,800`,
      days_left: `6`,
      width: '86.5%',
      img: 2
    },
    {
      name: `Testing A New Campaign`,
      text: `At this time due to Coronavirus -COVID-19 - we currently are unable to supply kits (any kits claimed prior to March 18th will still be fulfilled).`,
      company: `Rockers Technology`,
      point: 'Chicago, IL',
      funded: `2,348`,
      goal: `32,800`,
      days_left: `6`,
      width: '86.5%',
      img: 3
    }
  ];
  categoriesMin = [
    {name: `Business`, q: 34},
    {name: `Creative`, q: 32},
    {name: `Community`, q: 28}
  ];
    checkPopular = false;
    checkPopularMin = false;
    checkAllCategories = false;
    Popular() {
      if (this.checkPopular) {
        this.checkPopular = false;
      }else {
        this.checkPopular = true;
      }
    }
    PopularMin() {
      if (this.checkPopularMin) {
        this.checkPopularMin = false;
      }else {
        this.checkPopularMin = true;
      }
    }
  allCategories() {
    if (this.checkAllCategories) {
      this.checkAllCategories = false;
    }else {
      this.checkAllCategories = true;
    }
  }
}
