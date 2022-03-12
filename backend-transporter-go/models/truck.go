package models

import (
	"time"

	"gorm.io/gorm"
)

// Truck defines the structure for an API truck
// swagger:model
type Truck struct {
	gorm.Model
	ID              int
	License_number  string
	License_type    string
	Type            string
	Production_year int
	STNK            string
	KIR             string
	Created_at      time.Time
	Updated_at      time.Time
}
