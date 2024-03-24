import { Country } from '../../interfaces/country';
import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = []
  constructor(private countriesService: CountriesService) {}
  searchByRegion(regionTerm: string): void {
    this.countriesService.searchRegion(regionTerm).subscribe(
      countries => {
        this.countries = countries;
      });
  }
}
