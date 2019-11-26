// import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	CommonModule,
	LocationStrategy,
	PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';


import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true,
	wheelSpeed: 1,
	wheelPropagation: true,
	minScrollbarLength: 20
};   

@NgModule({
	declarations: [
		AppComponent,
		SpinnerComponent,
		FullComponent,
		NavigationComponent,
		SidebarComponent,
		BreadcrumbComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		PerfectScrollbarModule,
		NgbModule,
		RouterModule.forRoot(Approutes, { useHash: false })
	],
	providers: [
		{
			provide: LocationStrategy,
			useClass: PathLocationStrategy
		},
	{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
