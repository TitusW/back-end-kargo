package main

import (
	"errors"
	"log"
	"os"
)

func main() {
	err := checkEnv()
	if err != nil {
		log.Fatalf("Error ENV: %s", err)
	}
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
