const express = require("express");
const { getLeads, createLead } = require("../controller/leadsController");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Lead:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the lead
 *         name:
 *           type: string
 *           description: The name of the lead
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the lead
 *         status:
 *           type: string
 *           enum: [New, Engaged, Proposal Sent, Closed-Won, Closed-Lost]
 *           default: New
 *           description: The status of the lead
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the lead was created
 *       example:
 *         id: "64ff32a2f3b59a1a3e4fbc0a"
 *         name: "Abenezer Tesfaye"
 *         email: "abenezerupwork@gmail.com"
 *         status: "New"
 *         createdAt: "2024-03-06T12:00:00Z"
 */

/**
 * @swagger
 * /api/v1/leads:
 *   post:
 *     summary: Add a new lead
 *     tags: [Leads]
 *     description: Creates a new lead with name, email, and status.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lead'
 *     responses:
 *       201:
 *         description: Lead created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lead'
 *       400:
 *         description: Lead with this email already exists
 *       500:
 *         description: Internal server error
 */
router.post("/", createLead);

/**
 * @swagger
 * /api/v1/leads:
 *   get:
 *     summary: Get all leads
 *     tags: [Leads]
 *     description: Retrieve a list of all leads stored in the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved list of leads
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lead'
 *       500:
 *         description: Internal server error
 */
router.get("/", getLeads);

module.exports = router;
