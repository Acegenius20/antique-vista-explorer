
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import AntiqueDetail from '../components/AntiqueDetail';

const AntiqueView = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/collection" />;
  }

  return (
    <div className="min-h-screen parchment-bg">
      <AntiqueDetail id={id} />
    </div>
  );
};

export default AntiqueView;
