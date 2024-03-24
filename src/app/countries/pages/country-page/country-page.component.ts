import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
  public country?: Country;
 constructor(
  private activatedRoute: ActivatedRoute,
  private countriesService: CountriesService,
  private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id))
    )
    .subscribe( country => {
      if (country) return this.country = country;
      else return this.router.navigateByUrl('');
    });
  }

  get translationsList() {
    const translations = Object.keys({ ...this.country?.translations })
    return translations;
  }
}
