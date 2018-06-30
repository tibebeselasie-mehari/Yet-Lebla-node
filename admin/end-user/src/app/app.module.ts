import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BestFoodComponent } from './best-food/best-food.component';
import { FoodCourtComponent } from './food-court/food-court.component';
import { AffordableComponent } from './affordable/affordable.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { NewFoodComponent } from './admin/new-food/new-food.component';
import { AddPlaceComponent } from './admin/add-place/add-place.component';
import { AdminFoodsComponent } from './admin/admin-foods/admin-foods.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminPlacesComponent } from './admin/admin-places/admin-places.component';
import { EditUsersComponent } from './admin/edit-users/edit-users.component';
import { EditPlacesComponent } from './admin/edit-places/edit-places.component';
import { EditFoodsComponent } from './admin/edit-foods/edit-foods.component';
import { AdminFoodsHintComponent } from './admin/admin-foods-hint/admin-foods-hint.component';
import { AdminUsersHintComponent } from './admin-users-hint/admin-users-hint.component';
import { AdminPlacesHintComponent } from './admin/admin-places-hint/admin-places-hint.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminUnauthorizedComponent } from './admin/admin-unauthorized/admin-unauthorized.component';
import { ApiService } from './api.service';
import { AdminApiService } from './admin-api.service';
import { AuthService } from './auth.service';
import { ModalComponent } from './modal/modal.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PlaceDetailIntroComponent } from './place-detail-intro/place-detail-intro.component';
import { UserDetailIntroComponent } from './user-detail-intro/user-detail-intro.component';
import { FoodDetailIntroComponent } from './food-detail-intro/food-detail-intro.component';


@NgModule({
  declarations: [
    AppComponent,
    BestFoodComponent,
    FoodCourtComponent,
    AffordableComponent,
    SearchComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    SignupComponent,
    NewFoodComponent,
    AddPlaceComponent,
    AdminFoodsComponent,
    AdminPlacesComponent,
    AdminUsersComponent,
    EditFoodsComponent,
    EditPlacesComponent,
    EditUsersComponent,
    AdminFoodsHintComponent,
    AdminUsersHintComponent,
    AdminPlacesHintComponent,
    AdminLoginComponent,
    AdminUnauthorizedComponent,
    ModalComponent,
    FoodDetailComponent,
    PlaceDetailComponent,
    UserDetailComponent,
    PlaceDetailIntroComponent,
    UserDetailIntroComponent,
    FoodDetailIntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        'path': '',
        'component': HomeComponent
      },
      {
        'path': 'bestFoods',
        'component': BestFoodComponent
      },
      {
        'path': 'foodCourt',
        'component': FoodCourtComponent
      },
      {
        'path': 'affordable',
        'component': AffordableComponent
      },
      {
        'path': 'search',
        'component': SearchComponent
      },
      {
        'path': 'login',
        'component': LoginComponent
      },
      {
        'path' : 'signup',
        'component' : SignupComponent
      },


      {
        'path' : 'foods',

        'children': [
          {
            'path' : '',
            'component' : FoodDetailIntroComponent
          },
          {
            'path' : ':foodid',
            'component' : FoodDetailComponent
          }
        ]

      },

      {
        'path' : 'users',

        'children': [
          {
            'path' : '',
            'component' : UserDetailIntroComponent
          },
          {
            'path' : ':username',
            'component' : UserDetailComponent
          }
        ]
      },



      {
        'path' : 'places',

        'children': [
          {
            'path' : '',
            'component' : PlaceDetailIntroComponent
          },
          {
            'path' : ':placename',
            'component' : PlaceDetailComponent
          }
        ]

      },



      {
        'path' : 'admin',
        'component' : AdminComponent,
        'children': [
          {
            'path' : 'foods',
            'component' : AdminFoodsComponent,
            'children': [
              {
                'path' : 'new',
                'component' : NewFoodComponent
              },
              {
                'path' : 'edit/:foodid',
                'component' : EditFoodsComponent
              },
              {
                'path' : '**',
                'component' : AdminFoodsHintComponent
              }
            ]
          },

          {
            path : 'places',
            component : AdminPlacesComponent,
            children: [
              {
                path : 'new',
                component : AddPlaceComponent
              },
              {
                path : 'edit/:placename',
                component : EditPlacesComponent
              },
              {
                'path' : '**',
                'component' : AdminPlacesHintComponent
              }
            ]
          },

          {
            path : 'users',
            component : AdminUsersComponent,
            children: [
              {
                path : 'edit/:username',
                component : EditUsersComponent
              },
              {
                'path' : '**',
                'component' : AdminUsersHintComponent
              }
            ]
          },

          {
            path: '**',
            redirectTo : 'foods'
          }
        ]
      }
    ], {
     useHash : true
    })
  ],
  providers: [
    ApiService,
    AdminApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
