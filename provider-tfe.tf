provider "tfe" {
  hostname = "localhost:443"
  token    = "var.token"
  version  = "~> 0.35.0"
}