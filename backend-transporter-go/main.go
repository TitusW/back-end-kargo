package main

import (
	"log"
	"os"
)

func main() {
	checkEnv()
}

func checkEnv() {

	if _, found := os.LookupEnv("DATABASE_HOST"); !found {
		log.Fatal("DATABASE_HOST value does not exist in the environment.")
	}

	if _, found := os.LookupEnv("DATABASE_PORT"); !found {
		log.Fatal("DATABASE_PORT value does not exist in the environment.")
	}

	if _, found := os.LookupEnv("DATABASE_USER"); !found {
		log.Fatal("DATABASE_USER value does not exist in the environment.")
	}

	if _, found := os.LookupEnv("DATABASE_PASS"); !found {
		log.Fatal("DATABASE_PASS value does not exist in the environment.")
	}

	log.Println("Environment check passed.")

}
