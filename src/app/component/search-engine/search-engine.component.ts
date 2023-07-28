import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { searchPageConstant } from 'src/app/app-constants';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent {
  headingContent: string ="";
  subHeadingContent: string ="";
  trending: string ="";
  selectedOptionId:number | undefined;
 constructor(private router:Router){

 }
  ngOnInit(): void{
    this.headingContent = searchPageConstant.headingContent,
    this.subHeadingContent = searchPageConstant.subHeadingContent,
    this.trending = searchPageConstant.trending
  }
  onSearchClick(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.list) {
      // Loop through the datalist options and find the selected one
      const options = inputElement.list.options;
      for (let i = 0; i < options.length; i++) {
        const option = options[i] as HTMLOptionElement;
        if (option.value === inputElement.value) {
          this.selectedOptionId = +option.id; // Convert the ID to a number (if needed)
          break;
        }
      }
    } else {
      // Handle the case when the datalist is not present
      this.selectedOptionId = undefined;
      console.warn("Datalist is not associated with the input element.");
    }
    switch(this.selectedOptionId){
      case 1:
        this.router.navigate(['/stockInformation']);
        break;
      case 2:
        this.router.navigate(['/']);
        break;
      default:
        break;


    }
  }
}



