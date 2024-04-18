import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.css']
})
export class MapMarkerComponent implements OnInit, OnDestroy {

  @ViewChild('map', {static: true}) mapElementRef!: ElementRef;
  center = { lat: 28.649944693035188, lng: 77.23961776224988 };
  map: any;
  markers: any[] = [];
  markerPosition: google.maps.LatLng | null = null;
  savedCoordinates: { lat: number, lng: number }[] = [];
  private renderer: Renderer2;

  constructor(renderer: Renderer2) {
    this.renderer = renderer;
  }

  ngOnInit(): void {
    this.initMap();
  }

  async initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    this.map = new Map(this.mapElementRef.nativeElement, {
      center: { lat: 37.419, lng: -122.02 },
      zoom: 14,
      mapId: '4504f8b37365c3d0',
    });

    // Example usage of AdvancedMarkerElement
    const pinBackground = new PinElement({ background: '#FBBC04', borderColor: '#137333', glyphColor: 'white',});
    const markerViewBackground = new AdvancedMarkerElement({
      map: this.map,
      position: { lat: 37.419, lng: -122.01 },
      content: pinBackground.element,
      gmpDraggable: true, // Make the marker draggable
    });
  
  
  // Normal Marker
  const pinBorder = new PinElement({ borderColor: '#137333',  });
  const markerViewBorder = new AdvancedMarkerElement({
    map: this.map,
    position: { lat: 37.415, lng: -122.03 },
    content: pinBorder.element,
    gmpDraggable: true, // Make the marker draggable
  });
  
  
  const pinGlyph = new PinElement({ glyphColor: 'white', });
  const markerViewGlyph = new AdvancedMarkerElement({
    map: this.map,
    position: { lat: 37.415, lng: -122.02 },
    content: pinGlyph.element,
    gmpDraggable: true, // Make the marker draggable
  });
  
  
  
  // const pinNoGlyph = new PinElement({glyph: '',  });
  // const markerViewNoGlyph = new AdvancedMarkerElement({
  //   map: this.map,
  //   position: { lat: 37.415, lng: -122.01 },
  //   content: pinNoGlyph.element,
  //   gmpDraggable: true, // Make the marker draggable
  // });

  }

  ngOnDestroy(): void {
    // Clean up any event listeners if necessary
  }
}
