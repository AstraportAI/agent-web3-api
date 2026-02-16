# agent-web3-api

NestJS orchestration API for Agent-Web3.

## Purpose

Provide a unified API for agents and applications to simulate and execute blockchain actions safely.

## Responsibilities

* transaction construction
* wallet abstraction
* simulation via Rust core
* reasoning via Python models
* blockchain RPC interaction

## Endpoints (MVP)

POST /simulate
POST /transfer
GET  /balance/:chain/:address
POST /intent/transfer

## Role in Agent-Web3

Central coordination layer between UI, SDK, core, and models.
