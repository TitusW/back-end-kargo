package main

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"

	database "github.com/TitusW/team4-kargo-excellerate/db"
	"github.com/TitusW/team4-kargo-excellerate/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	err := initEnv()
	if err != nil {
		log.Fatalf("Error ENV: %s", err)
	}

	err = checkEnv()
	if err != nil {
		log.Fatalf("Error ENV: %s", err)
	}

	db := database.Connect()
	r := mux.NewRouter()
	driverh := handlers.NewDriverHandler(db)

	r.HandleFunc("/drivers", driverh.GetDrivers).Methods("GET")
	r.HandleFunc("/drivers", driverh.CreateDriver).Methods("POST")
	r.HandleFunc("/drivers/{id}", driverh.UpdateDriver).Methods("PUT")

	fmt.Println("[Go-Debug || GorillaMux] Listening and serving HTTP on : 8080")
	http.ListenAndServe(":8080", r)
}

func initEnv() error {
	log.Println("Checking .env file")

	if err := godotenv.Load(); err != nil {
		return err
	}

	return nil
}

func checkEnv() error {
	log.Println("Checking environment")

	if _, found := os.LookupEnv("DATABASE_HOST"); !found {
		return errors.New("DATABASE_HOST value does not exist")
	}

	if _, found := os.LookupEnv("DATABASE_PORT"); !found {
		return errors.New("DATABASE_PORT value does not exist")
	}

	if _, found := os.LookupEnv("DATABASE_USER"); !found {
		return errors.New("DATABASE_USER value does not exist")
	}

	if _, found := os.LookupEnv("DATABASE_PASS"); !found {
		return errors.New("DATABASE_PASS value does not exist")
	}

	log.Println("Environment check passed.")
	return nil
}
