const { buildSchema } = require('graphql')

module.exports = buildSchema(`
        type Booking {
            _id: ID!
            event: Event!
            user: User!
            admin: Admin!
            createdAt: String!
            updatedAt: String!
        }

        type Event {
            _id: ID!
            title: String!
            description: String!
            price: Float!
            date: String!
            creator: User!
        }

        type User {
            _id: ID!
            email: String!
            password: String
            confirmPassword: String
            createdEvents: [Event!]
        }

        type Admin {
            _id: ID!
            email: String!
            password: String
            confirmPassword: String
        }

        type Auth {
            userId: ID!
            token: String!
            tokenExpiration: Int!
        }

        type AdminAuth {
            adminId: ID!
            token: String!
            tokenExpiration: Int!
        }

        input EventInput {
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        input UserInput {
          email: String!
          password: String!
          confirmPassword: String!
        }

        input AdminInput {
          email: String!
          password: String!
          confirmPassword: String!  
        }

        type RootQuery {
            events: [Event!]!
            bookings: [Booking!]!
            login(email:String!, password: String!, confirmPassword: String!): Auth!
            adminLogin(email:String!, password: String!, confirmPassword: String!): AdminAuth!
        }
        
        type RootMutation {
            createEvent(eventInput: EventInput): Event
            createUser(userInput: UserInput): User
            createAdmin(adminInput: AdminInput): Admin
            bookEvent(eventId: ID!): Booking!
            cancelBooking(bookingId: ID!): Event!
        }
        
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    
    `)
