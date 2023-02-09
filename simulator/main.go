package main

import routeImport "github.com/salmomascarenhas/delivery-app/simulator/application/route"

func main() {
	route := routeImport.Route{
		ID: "1",
		ClientID: "1",
	}

	route.LoadPositions()
	stringJason, _ := route.ExportJsonPositions()
	fmt.Println(stringJason[0])


}