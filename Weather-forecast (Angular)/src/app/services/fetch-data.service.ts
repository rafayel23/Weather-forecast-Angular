import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForecastData } from '../interfaces and constructors/forecast-data.interface';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  
  private forecastApi: string = 'https://api.openweathermap.org/data/2.5/forecast?q=Yerevan&APPID=e0a85fcf17cacb749c5ed69ea98f62fb';
  private currentWeatherApi: string = 'https://api.openweathermap.org/data/2.5/weather?q=Yerevan&APPID=e0a85fcf17cacb749c5ed69ea98f62fb'

  constructor(private http: HttpClient){}

  public fetchWeeklyForecast(): Observable<ForecastData>{
    return this.http.get<ForecastData>(this.forecastApi)
  }

  public fetchCurrentWeather(): Observable<any>{
    return this.http.get<any>(this.currentWeatherApi)
  }

}
