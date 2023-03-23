const RootNavigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RootNavigation;
