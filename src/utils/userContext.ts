import React, { createContext, useState, useContext, ReactNode } from 'react';



interface User {
    id: string;
    email: string;
    fullName: string;
    // Add other user properties as needed
}