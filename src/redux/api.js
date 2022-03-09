const getMessage = async () => {
    const response = await fetch();

    return response.json();
};

export default getMessage;