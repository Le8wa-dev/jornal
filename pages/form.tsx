import React from 'react';
import { MyCustomForm } from '../components/MyCustomForm';
import { MainLayout } from '../layouts/MainLayout';

export default function Formpage() {

    return (
        <MainLayout>
            <h1>Form</h1>
            <div style={{ marginBottom: '50px' }}>
                <MyCustomForm />
            </div>
        </MainLayout>
    );
}